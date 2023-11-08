export default function Contact() {
  return (
   
<div>
      <h1>Connect With Me! </h1>
      <p>
        Schedula a meeting with me. Just input your email and send me a message and I'll get back to you as soon as I can.
      </p>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button type="button" className="btn btn-primary">Send</button>
    </div>
    
  
  );
}
