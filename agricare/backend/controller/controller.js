const db = require("../models/connection")
const bcrypt=require('bcrypt')
const Register=db.register
const Postcrop =db.postcrops

class controller{
    static register=async(req,res)=>{
        const {name,email,password,type}=req.body
        if(name&&email&&password&&type){
            
            if(password)
            {
                const hashPassword=await bcrypt.hash(password,10)
                const user=await Register.create({
                    name:name,
                    email:email,
                    password:hashPassword,
                    type:type
                }) 
                res.status(200).send("Account Created SuccessFully")

            }else{
                res.status(400).send("Passowrd  does not match")
            }
            }else{
            res.status(404).send("Fill all Required Fields")
        }
    }

    static login=async (req, res) => {
        try {
          const { email, password } = req.body;
          
          // Retrieve admin from database
          const user = await Register.findOne({ where: { email } });
          // Check if admin exists
          if (!user) {
            return res.status(404).send({ message: 'User Not Found' });
          }
      
          // Check if password is correct
          const isPasswordValid = await bcrypt.compare(password, user.password);
      
          if (!isPasswordValid) {
            return res.status(401).send({ message: 'Invalid email and  password' });
          }      
          res.status(200).send(user);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal server error');
        }
    }

    static addProduct=async (req, res) => {
      const { name, type, quantity, price, description, image,location } = req.body;
      try {
        const postCrop = await Postcrop.create({
          cropName:name,
          cropType:type,
          quantity:quantity,
          pricePerUnit:price,
          description:description,
          image:image,
          location:location
        });
    
        res.status(201).json("Crops Added");
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the post crop.' });
      }
    };

    static fetchData=async(req,res)=>{
      const data=await Postcrop.findAll({})
      res.status(200).send(data)
    }
    

  }

 
  

  // Read all post crops
  // app.get('/post-crops', async (req, res) => {
  //   try {
  //     const postCrops = await PostCrop.findAll();
  
  //     res.json(postCrops);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'An error occurred while retrieving the post crops.' });
  //   }
  // });
  
  // Update a post crop
  // app.put('/post-crop/:id', async (req, res) => {
  //   const { id } = req.params;
  //   const { cropName, cropType, quantity, pricePerUnit, description, image } = req.body;
  
  //   try {
  //     const postCrop = await PostCrop.findByPk(id);
  
  //     if (!postCrop) {
  //       return res.status(404).json({ message: 'Post crop not found.' });
  //     }
  
  //     postCrop.cropName = cropName;
  //     postCrop.cropType = cropType;
  //     postCrop.quantity = quantity;
  //     postCrop.pricePerUnit = pricePerUnit;
  //     postCrop.description = description;
  //     postCrop.image = image;
  
  //     await postCrop.save();
  //   }
  // })

  

module.exports=controller