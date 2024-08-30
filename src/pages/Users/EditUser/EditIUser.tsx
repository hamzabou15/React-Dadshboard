import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material"
import "./EditUser.scss"
import {BiPencil} from "react-icons/bi"
import { useState } from "react"
import {PiTrashFill} from "react-icons/pi"
import {BsPencilFill} from "react-icons/bs"
const EditIUser = () => {

    const [edit , setEdit ] = useState(false)

    const [role, setRole] = useState<string>('');
    const [firstName, setFirstName] = useState<string>("Sara");

    const handleRoleChange =  (event: React.ChangeEvent<HTMLInputElement>    ) => {
        setRole(event.target.value);
      };
      const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    };
      const PopupDelete = () => {
        return (
            <div className="popup_container">
            </div>
        );
    };
  return (
    <div className='EditUser'>
        <div className="EditUser_container">
            <div className="header_contain">
                <div className="name_logo">
                    <div className="avatar_container">
                        <div className="icon_conatianer">
                              <BiPencil className="update_icon" style={{color:"white"}}/>
                        </div>
                        <img src="https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                    </div>
                    <div className="name">
                            <p>Sara Tandecacci</p>
                            <span>New York, USA</span>

                    </div>
                </div>
                <div className="buttons_actions">
                    <div className="delete_btn">
                    < PiTrashFill className="trash"/>
                      <span>Delete</span>  
                    </div>
                    <div className="edit_btn" style={edit ? { background: "#09595999" } : {}} onClick={() => setEdit(!edit) }>
                    < BsPencilFill className="pen"  />
                       <span> Edit</span>
                    </div>
                </div>
            </div>
            
            <div className='content'>
                <form>
                    <div className='display_flex' >
                                <TextField
                                name="firstName"
                                label="First Name"
                                value={firstName}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                type="tel"
                                InputProps={{
                                    readOnly: !edit, // Invert the value of 'edit' for the 'readOnly' attribute
                                }}
                                onChange={handleFirstNameChange}
                                disabled={!edit} // Invert the value of 'edit' for the 'disabled' attribute
                            />
                                <TextField
                                name="lastName"
                                label="Last Name"
                                value="Tandecacci"
                                // onChange={handleChange}
                                // error={!!errors.lastName}
                                helperText=""
                                
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                disabled={edit ? false : true}

                                />
                    </div>
                    <div className='display_flex' >
                            <TextField
                                name="email"
                                label="Email adresse"
                                value="sara.Tandecacci@gmail.com"
                            
                                helperText=""
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                disabled={edit ? false : true}

                                />
                                <TextField
                                name="location"
                                label="Location"
                                value="New York, USA"
                            
                                helperText=""
                                fullWidth
                                disabled={edit ? false : true}
                                margin="normal"
                                variant="outlined"
                                />
                     </div>
                
                     <TextField
                      name="phone"
                      label="Phone Number"
                       value="+11 6 12 13 14 21"
             
                      helperText=""
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      disabled={edit ? false : true}

                    />
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Role 
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup name="role" value={role} >
                     
                            <FormControlLabel checked  value="admin" control={<Radio />} label="Verified"  disabled={edit ? false : true} />
                            <FormControlLabel value="user" control={<Radio />} label="Not verified"  disabled={edit ? false : true} />
                            </RadioGroup>
                        </FormControl>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
    
                    </div>
                    <div  className="buuton_container" >
                         <Button type="submit" variant="contained" color="primary">
                             Save Changes
                          </Button>
                        { edit &&  
                            <div className="cancel_btn"  onClick={() => setEdit(false) }>
                                Cancel
                            </div>
                        }
                    </div>
               </form>
            </div>
        </div>
      
    </div>
  )
}

export default EditIUser