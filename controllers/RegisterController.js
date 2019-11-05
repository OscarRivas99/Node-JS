const Register = require ("./../models/registro")

const insert=(req,res)=>{
    const student = new Register(req.body);
    student.save((error,document)=>{
        if(error)
        return res.status(500).json({
            msg:"hubo un error"
        });
        return res.status(201).json({
            msg: "creado",
            register:document
        })
    })
    
}

const getRegister = (req,res)=>{
    Register.find({}, (error,documents)=>{
        if(error)
        return res.status(500).json({
            msg:"hubo un error"
        });
        return res.status(200).json({
            msg:"ok",
            registers: documents
        });
    });
};
const getOneRegister = (req,res)=>{
    Register.findById({id:req.params.id,}, (error,document)=>{
        if(error)
        return res.status(500).json({
            msg:"hubo un error"
        });
        return res.status(200).json({
            msg:"ok",
            registers: document
        });
    });
};



module.exports = {
  getRegister, 
  insert,
  getOneRegister
};