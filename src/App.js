import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Section1 from "./Section1"

// array for table data
const data = [{
  name:"Free",
  price:"$0",
  duration:"/month",
  features:[
    {
    name:"Single User",
    value:"true"
  },
  {
    name:"5GB Storage",
    value:"true"
  },
  {
    name:"Unlimited Public Projects",
    value:"true"
  },
  {
    name:"Community Access",
    value:"true"
  },
  {
    name:"Unlimited Private Projects",
    value:"true"
  },
  {
    pname:"Unlimited Private Projects",
    value:"false"
  },
  {
    name:"Dedicated Phone Support",
    value:"false"
  },
  {
    name:"Free Subdomain",
    value:"false"
  },
  {
    name:"Monthly Status Reports",
    value:"false"
  }
]
},
{
  name:"Plus",
  price:"$9",
  duration:"/month",
  features:[
    {
    name:"5 User",
    value:"true",
    isBold:"true"
  },
  {
    name:"50GB Storage",
    value:"true"
  },
  {
    name:"Unlimited Public Projects",
    value:"true"
  },
  {
    name:"Community Access",
    value:"true"
  },
  {
    name:"Unlimited Private Projects",
    value:"true"
  },
  {
    name:"Dedicated Phone Support",
    value:"true"
  },
  {
    name:"Free Subdomain",
    value:"true"
  },
  {
    name:"Monthly Status Reports",
    value:"false"
  }
]

},
{
  name:"Pro",
  price:"$49",
  duration:"/month",
  features:[
    {
    name:"Unlimited Users",
    value:"true",
    isBold:"true"
  },
  {
    name:"150GB Storage",
    value:"true"
  },
  {
    name:"Unlimited Public Projects",
    value:"true"
  },
  {
    name:"Community Access",
    value:"true"
  },
  {
    name:"Unlimited Private Projects",
    value:"true"
  },
  {
    name:"Dedicated Phone Support",
    value:"true"
  },
  {
    name1:"Unlimited",
    name:"Free Subdomain",
    value:"true",
    
  },
  {
    name:"Monthly Status Reports",
    value:"true"
  }
]
}

]
function App() {
  
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
        <div className="row">
          {/* looping for section component */}
        {
          data.map((ele)=><Section1 key={ele.name} data={ele}></Section1>)
        }
      </div>
  </div>
</section>
    </div>
  );
}

export default App;
