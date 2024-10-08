import express from "express";
const app = express()
import cors from "cors";
const port = process.env.PORT || 5000;
import 'dotenv/config'
import mongodb, { ObjectId } from "mongodb";



//middleware
app.use(express.json())  
app.use(cors())



const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;



const { MongoClient, ServerApiVersion} = mongodb;
const uri = "mongodb+srv://"+user+":"+password+"@job-portal-database.8jnn2.mongodb.net/?retryWrites=true&w=majority&appName=job-portal-database";

// Replace <db_password> with the password for the database user. Ensure any option params are URL encoded
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create database
    const database = client.db("JobPortalDatabase");
    const jobsCollections = database.collection("Jobs");

    //get all jobs
    app.get("/all-jobs", async(req,res) => {
       const jobs = await jobsCollections.find({}).toArray();
       res.send(jobs);
    })

    //get single job using id
    app.get("/all-jobs/:id" , async(req,res)=>{
      const id = req.params.id;
      const job = await jobsCollections.findOne({_id:new ObjectId(id)})
      res.send(job);
    })

    //get jobs by email
    app.get("/myJobs/:email" , async(req,res) =>{
      //console.log(req.params.email);
       const jobs = await jobsCollections.find({postedBy:req.params.email}).toArray();
       res.send(jobs);
    })

    //delete a job
    app.delete("/job/:id" , async(req,res) =>{
      const id = req.params.id;
      const  filter = {_id: new ObjectId(id)}
      const result = await jobsCollections.deleteOne(filter);
      res.send(result);
    })

    //update a job
    app.patch("/update-job/:id" , async(req,res) =>{
      const id = req.params.id;
      const jobdata = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert:true};
      const updateDoc = {
        $set:{
           ...jobdata
        }
      };
      const result = await jobsCollections.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    //post a job
    app.post("/post-job" , async(req,res)=>{  
       const body = req.body;
       body.createAt = new Date();
       //console.log(body);
       const result = await jobsCollections.insertOne(body);
       if(result.insertedId){
        //console.log(result);
        return res.status(200).send(result);
       }
       else{
        return res.status(404).send({
          message:"Cannot insert.Try again later",
          status:false,
        })
       }
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Hello dev!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})