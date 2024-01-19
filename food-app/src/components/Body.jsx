import React from 'react'
const restrauntList = [{
  name: "zomato",
  image:"http://www.wallpaperup.com/uploads/wallpapers/2015/04/11/659101/5ff9c57dcd7405f38eda737bc5be9e1c.jpg",
  cusines: ['Spanish food', 'Chinese'],
  address: "Khandari Market",
  rating:4.5,
},
{
  name: "burger king",
  image:"http://www.pixelstalk.net/wp-content/uploads/2016/08/Desktop-Food-HD-Wallpapers-Free-Download.jpg",
  cusines: ['Indian','American'],
  address: "Khandari Market",
  rating:4.5, 
},
{
  name: "Dominos",
  image:"https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
  cusines: ['South Indian','kerla'],
  address: "Khandari Market",
  rating:4.5, 
},
{
  name: "Dominos",
  image:"https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
  cusines: ['South Indian','kerla'],
  address: "Khandari Market",
  rating:4.5, 
},
{
  name: "Dominos",
  image:"https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
  cusines: ['South Indian','kerla'],
  address: "Khandari Market",
  rating:4.5, 
},
{
  name: "Dominos",
  image:"https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
  cusines: ['South Indian','kerla'],
  address: "Khandari Market",
  rating:4.5, 
},
{
  name: "Dominos",
  image:"https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
  cusines: ['South Indian','kerla'],
  address: "Khandari Market",
  rating:4.5, 
},
{
  name: "Dominos",
  image:"https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg",
  cusines: ['South Indian','kerla'],
  address: "Khandari Market",
  rating:4.5, 
}
]


const RestrauntCard = (props) =>{
    return(
      <div className='card' style={{width:'14rem',margin:"10px",borderRadius:"10px", boxShadow:"0 2px 4px rgba(0,0,0,0.2)" }}>
           <img src={props.restrauntList.image}
            style={{ borderRadius:"10px"  }}
            alt="food-img" />

            <div className='card-body'>
              <h4 className='card-title'>{props.restrauntList.name}</h4>
              <h5 className='card-text'>{props.restrauntList.cusines}</h5>
              <p className='card-text'>{props.restrauntList.address}</p>
              <h4 className='text-warning'>{props.restrauntList.rating} rating</h4>
            </div>
        </div>
    )
};

 function Body() {
  return (
    <div style={{marginTop: "90px"}} className='d-flex flex-wrap'>
     {
      restrauntList.map((restraunt, index)=>(
        <RestrauntCard key={index} restrauntList={restraunt}/>
      ))}
    </div>
  )
}

export default Body;
