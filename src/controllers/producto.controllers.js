const productoCTRL = {};

const Producto = require('../models/producto');

productoCTRL.descontarStock = async(req,res)=>{
    const array = req.body;
    for await(let producto of array){
        await Producto.findOneAndUpdate({_id:producto._id},producto);
        console.log(`Producto ${producto.descripcion} modificado el stock a: ${producto.stock}`)
    };
    res.send("Stock Modificado")
}

//traemos los productos
productoCTRL.getsProductos = async(req,res)=>{
    const {descripcion,condicion} = req.params;
    let productos;
    if (descripcion === "textoVacio") {
         productos = await Producto.find({}).limit(50);
    }else{  
        let re;
        try {
            re = new RegExp(`^${descripcion}`);
            if (descripcion[0] === "*") {
                
            re = new RegExp(`${descripcion.substr(1)}`);
            }
            productos = await Producto.find({[condicion]:{$regex:re,$options:"i"}}).limit(50);
        } catch (error) {
            
            re = descripcion;
            productos = await Producto.find().limit(50);
        }
    }
    res.send(productos);
};

productoCTRL.traerPrecio = async(req,res)=>{
    const {id} = req.params
    const producto = (await Producto.find({_id:id},{precio:1,_id:0}))[0];
    res.send(`${producto.precio}`);
}

productoCTRL.traerProducto = async(req,res)=>{
    const {id} = req.params;
    let producto = [];
    if (id === "rubro") {
        rubros = await Producto.find({},{rubro:1,_id:0});
        rubros.forEach(rubro=>{
            producto.push(rubro.rubro);
        });
    }else{
        producto = (await Producto.find({_id:id}))[0];
    }
    res.send(producto);
}

productoCTRL.traerProductoPorNombre = async(req,res)=>{
    const {nombre} = req.params;
    const producto = await Producto.findOne({descripcion:nombre});
    res.send(producto);
}

productoCTRL.modificarProducto = async(req,res)=>{
    const {id} = req.params;
    let producto;
    let mensaje;
    let estado;
    req.body.rubro !== "" ? (req.body.rubro = req.body.rubro.toUpperCase()) : "";
    try {
        producto = await Producto.findOneAndUpdate({_id:id},req.body);
        mensaje = `Producto ${producto.descripcion} Modificado`;
        estado = true
    } catch (error) {
        mensaje = `Producto ${producto.descripcion} No se modifico`
        estado = false
    }
    res.send(JSON.stringify({
        estado,
        mensaje
    }));    
    
}

productoCTRL.cargarProducto = async(req,res)=>{
    let producto;
    let mensaje;
    let estado;
    req.body.descripcion = req.body.descripcion.toUpperCase();
    req.body.marca !== "" && (req.body.marca = req.body.marca.toUpperCase());
    req.body.rubro !== "" ? (req.body.rubro = req.body.rubro.toUpperCase()) : "";
    try {
        producto = new Producto(req.body);
        await producto.save();
        mensaje = `Producto ${producto.descripcion} cargado`;
        estado = true;
    } catch (error) {
        estado = false;
        console.log(error)
        if(producto.descripcion === ""){
            mensaje = `Producto no cargado, Falta la descripcion`
        }else if(!producto.stock){
            mensaje = `Producto no cargado, Falta el stock`
        }else if(!producto.costo){
            mensaje = `Producto no cargado, Falta el costo`
        }else{
            mensaje = `Producto ${producto.descripcion} No cargado`;
        }
    }
    console.log(mensaje)
    res.send(JSON.stringify({
        mensaje,
        estado
    }));
}

productoCTRL.eliminarProducto = async(req,res)=>{
    const {id} = req.params;
    const producto = await Producto.findOneAndDelete({_id:id});
    res.send(`Producto ${producto.descripcion} eliminado`);
}

module.exports = productoCTRL