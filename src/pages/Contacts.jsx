
export default function About() {
    return(
        <div className="container">
            <div className="card">
                <h1 className="title">CONTACT</h1>
               <form action="#">
                    <label>Feel free to get in touch, I'd really enjoy hearing from you!</label>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <textarea placeholder="Message..."></textarea>

                   <div className="btn">
                        <button>Send the Message!</button>
                   </div>
               </form>

            </div>
        </div>
    )
};
