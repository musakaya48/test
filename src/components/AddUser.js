import React from 'react';
import UserContext from "../contexts/UserContext";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import validations from '../components/Validations'

function AddUser() {
    const{users,setUsers,currentUsers,setCurrentUsers} = React.useContext(UserContext);
    // const[name,setName] = React.useState("");
    // const nameChange = (e) => setName(e.target.value);
    // const addUser = (e)=>{        
    //     const newUsr = {name:name,id:uuidv4(),age:1};
    //     setUsers([...users,newUsr]);
    //     setCurrentUsers([...currentUsers,newUsr]);
    // }

    // React.useEffect(()=>{
    // setName("");
    // },[users]);



    const formik = useFormik({
		initialValues: {
			name: ""			
		},
		onSubmit: async (values, bag) => {

            const newUsr = {name:values.name,id:uuidv4(),age:1};
            setUsers([...users,newUsr]);
            setCurrentUsers([...currentUsers,newUsr]);
			
			bag.resetForm();			
		},
         validationSchema: validations,
	});

    const {
		values,
		errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched        
	} = formik;

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
            <input 
            placeholder="Ad"
            name='name' 
            value={values.name} 
            disabled={isSubmitting}
            // onChange={nameChange}
            onChange={handleChange}
            />
            {errors.name && touched.name && (<span>{errors.name}</span>)}
            <input 
            type="submit" 
            value="Ekle" 
            // onClick={addUser} 
            />
            </form>
        </div>
    );
}

export default AddUser;