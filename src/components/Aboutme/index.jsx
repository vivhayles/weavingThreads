import pictureofme from "../../images/pictureofme.jpg";
import Subheading from "../Subheading/index.jsx";
function Aboutme() {
    return (
        <section className="lg:inline-block" id="about-me">
            <img className="col-span-1 float-right m-4 h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64"
                 alt="A picture of Ruth a smiling white woman with short brown hair" src={pictureofme}/>
            <Subheading text="About Me"/>
            <div className="lg:text-lg">
                <p className='m-4'>Hello, my name is Ruth Wilkinson and welcome to Weaving Threads Well-Being. My journey to becoming an Emotion/Body/Belief Code Practitioner started long before I knew what Energy Healing was. Like many healers, I was living life as best I could, but something always felt off. I wasn’t
                being true to myself, and I often buried the hard things that were too difficult to face.</p>

                <p className='m-4'>When recurring health issues like Candida started to affect me, I realized it was time for a change.
                This led me to discover energy healing, with a nudge from Louise Hay’s book <em>You Can Heal Your Life.</em> Over
                the next few years, I kept coming back to it, but it wasn’t until 2012 that I found my real
                breakthrough.</p>

                <p className='m-4'>That’s when I came across Dr. Bradley Nelson’s <em>The Emotion Code</em> and knew I had found something
                life-changing. The Emotion Code helped me understand how our subconscious holds onto trapped emotions,
                creating imbalances that can affect our health and wellbeing. As I worked with practitioners to release
                these imbalances, I felt better—physically and emotionally—sometimes immediately, sometimes over time.</p>

                <p className='m-4'>Now, as a trained Emotion, Body, and Belief Code Practitioner, I’m passionate about helping others
                release their trapped emotions and find balance, healing, and freedom from what’s been holding them
                back.</p>
            </div>
        </section>
    )
}

export default Aboutme