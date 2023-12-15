import React, {useState} from 'react';
import Input from '../../components/app/Input';
import Button from '../../components/app/Button';
import {Outlet} from 'react-router-dom';

const Dashboard = () => {
  const [error, setError] = useState(false)
  return (
    <div>
     <h1 className="text-3xl font-bold underline text-red-400">
      Hello world!
    </h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus mollitia ratione illum id tenetur. Libero vero consectetur autem, dolores amet corrupti inventore, cumque, ea magni explicabo officia. Iste eos sunt iure voluptate placeat reprehenderit adipisci magnam, odit quaerat similique! Explicabo, nostrum? Natus dignissimos tempora voluptatibus. Dolor eligendi facilis ipsa quod aperiam, ducimus aspernatur distinctio consequuntur et eaque sit aut nobis debitis cupiditate atque eos, deleniti, alias sunt sint. Iste illum quia quae, iusto adipisci blanditiis! Corrupti magni eum sequi accusantium! Laboriosam architecto cum eum odio. Nisi libero aperiam voluptatibus optio hic. Quisquam omnis veritatis tenetur et cumque distinctio repudiandae! Fuga illo quidem eaque. Dignissimos, nihil? Aliquam sed nam nulla suscipit debitis obcaecati nesciunt nihil consequuntur eaque voluptas, rerum eum deleniti possimus provident repellat error deserunt facere velit pariatur modi? Esse, accusantium pariatur. Neque quidem modi repudiandae corporis similique enim ut magnam reprehenderit. Ea vitae suscipit itaque. Quia voluptatem ea exercitationem veniam dolorum rem totam asperiores voluptates. Optio aliquid tempore necessitatibus quibusdam! Perferendis consequatur nisi iusto? Hic maiores, nobis quos quae aliquid optio fugiat ipsa tenetur quibusdam amet, minus quod, laudantium vel culpa! Harum, voluptatem hic provident at iusto repellendus eligendi nulla doloribus accusantium eos laboriosam ea vel sed fuga quae.</p>
    <Button>Sign Up</Button>
    <div className='mt-5 ml-5'><Input placeholder={'Enter Email'} error={error} /></div>
    </div>
  );
};

export default Dashboard;