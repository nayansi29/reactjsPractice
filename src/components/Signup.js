function  Form(props)
{

    return (<>
    <div className="container mt-3">
         <br/><br/><br/>
         <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
               <form className="needs-validation"  id="myForm" method="post">
                  <h3>Sign Up</h3>
                  <small>{props.title}</small><br/>
                  <div className="row">
                     <div className="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" className="form-control" name="fname" id="fname" placeholder="" value="" />
                      
                       
                     </div>
                     <div className="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" className="form-control" name="lname" id="lname" placeholder="" value=""/>
                        
                     </div>
                  </div>
                  <div className="mb-3">
                     <label for="email">Email </label>
                     <input type="text" className="form-control" name="email" id="email" placeholder="Please Enter Email"/>
                    
                  </div>
                  <div className="mb-3">
                     <label for="password">Password</label>
                     <input type="password" className="form-control" name="pass" id="pass" placeholder="Please Enter Password"/>
                    
                  </div>
                  <div className="mb-3">
                     <label for="confirmpass"> Confirm Password</label>
                     <input type="password" className="form-control" name="confrmpass" id="confrmpass" placeholder="Please Enter Confirm Password"/>
                    
                  </div>
                  <button className="btn btn-primary btn-lg btn-block"  id="submit"  type="submit">Sign Up</button>
               </form>
            </div>
            <div className="col-lg-4" >
               
            </div>
         </div>
      </div>
    </>);
}

export default Form;