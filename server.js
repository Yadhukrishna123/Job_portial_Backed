const app = require("./app")
const userRoutes = require("./Routes/userRoutes")
const jobs = require("./Routes/newJobRoutes")
const contactRoutes = require("./Routes/contactRoutes")
const dotenv = require("dotenv")
const databaseConnection =require ("./config/databaseConnection")
dotenv.config({path:"./config/config.env"})
const cors = require("cors")






// app.use(express.json())
// app.use(express.urlencoded({extended:true}));
app.use(cors({
  credentials:true,
  origin:true
}));
app.use("/api/v1", userRoutes)
app.use("/api/v1", jobs)
app.use("/api/v1", contactRoutes)

  databaseConnection()
app.use(cors())

app.get('/about', (req, res) => {
  res.send('Hello World!')
})
 
app.listen(process.env.port, () => {
  console.log(`Server is running  on port ${process.env.port}`)
}) 