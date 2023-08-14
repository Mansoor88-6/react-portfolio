/* eslint-disable react/prop-types */


const Testimonial = () => {
    return (
        <div id="testimonial">
          <h2>Testimonial</h2>
    
          <section>
            <TestimonialCard
              name={"Hilal Ahmad"}
              feedback={"I worked with Mansoor at Seebiz pvt ltd, he is a hardworking guy who knows how to work well with the team"}
            />
    
            <TestimonialCard
              name={"Saqib"}
              feedback={
                "Mansoor was my classfellow in university, we did bachelors together. he was well known for his love of coding in the class"
              }
            />
    
            <TestimonialCard
              name={"Jamshed"}
              feedback={"Mansoor taught me how to code, from those small programs in C++ to full stack websites i learned everything from him"}
            />
          </section>
        </div>
      );
    };
    
    const TestimonialCard = ({ name, feedback }) => (
      <article>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User"
        />
        <h4>{name}</h4>
        <p>{feedback}</p>
      </article>
    );


export default Testimonial