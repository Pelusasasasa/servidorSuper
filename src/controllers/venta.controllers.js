const ventaCTRL = {};

const Venta = require('../models/Venta');

ventaCTRL.getVenta = async(req,res)=>{
    const {id,tipo} = req.params;
    console.log(id,tipo)
    const venta = await Venta.find({numero:id,tipo_venta:tipo});
    console.log(venta)
    res.send(venta[0]);
}

ventaCTRL.modificarVenta = async(req,res)=>{
    const {id} = req.params;
    const venta = await Venta.findOneAndUpdate({_id:id},req.body);
    res.send(`Venta ${venta._id} actualizada`);
}
ventaCTRL.cargarVenta = async(req,res)=>{
    let id = (await Venta.find().sort({$natural:-1}))[0];
    if (!id) {
        req.body._id = 1;
    }else{
        req.body._id = id._id + 1;
    }
    const venta = new Venta(req.body);
    await venta.save();
    res.send("Venta Guardada");
}

ventaCTRL.VentasDia = async(req,res)=>{
    const {fecha} = req.params;
    const inicioDia = new Date(fecha + "T00:00:00.000Z");
    const finDia = new Date(fecha + "T23:59:59.999Z");
    const ventas = await Venta.find({
        $and:[
            {fecha:{$gte:inicioDia}},
            {fecha:{$lte:finDia}}
        ]
    
    });
    res.send(ventas);
}

ventaCTRL.ventasMes = async(req,res)=>{
    const {fecha} = req.params;
    let mes = parseFloat(fecha);
    mes = mes>12 ? 1 : mes;
    let hoy = new Date();
    let diaHoy = hoy.getDate();
    diaHoy = diaHoy<10 ? `0${diaHoy}` : diaHoy;
    let fechaConMes = new Date(`${hoy.getFullYear()}-${mes}-1`);
    let fechaConMesSig = new Date(`${hoy.getFullYear()}-${mes + 1}-1`);
    const ventas = await Venta.find({
    $and:[
        {fecha:{$gte:fechaConMes}},
        {fecha:{$lte:fechaConMesSig}}
    ]
});
    res.send(ventas);
};

ventaCTRL.ventaAnio = async(req,res)=>{
    const {fecha} = req.params;
    const hoy = new Date();
    const esteAnio = new Date(`${fecha}-1-1`);
    const anioSig = new Date(`${parseFloat(fecha) + 1}-1-1`);
    const ventas = await Venta.find({
        $and:[
            {fecha:{$gte:esteAnio}},
            {fecha:{$lte:anioSig}}
        ]
    });
    res.send(ventas);
}

ventaCTRL.eliminarVenta = async(req,res)=>{
    const {id} = req.params;
    const venta = await Venta.findOneAndDelete({_id:id});
    res.send(`Venta ${venta._id} Eliminada`)
}

module.exports = ventaCTRL;