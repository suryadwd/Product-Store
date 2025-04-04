
  // CRUD 
  // 1 - Read 

  router.get("/user", async(req, res) => {
    try {
      const a = await Product.find({});
      return res.status(200).json({success:true, data: a})
    } catch (error) {
      return res.status(500).json({success:false, message:"Internal server error"})
    }
  })

  // 2 - Create

router.post("/user", async (req, res) => {
   const {name, price, image} = req.body()
   const product = new Product({
    name:name,
    price:price,
    image:image,
   })
   await product.save()
})


// 3 - Update

router.put("/user/update/:id", async (req, res) => {
  const {id} = req.param;
  const b = await Product.findByIdAndUpdate(id);
  
})


