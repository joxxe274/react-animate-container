import React from "react";

// components
import { PageTemplate } from '../../templates/Page.template';
import { NavLink } from "react-router-dom";
// styles 
import * as styles from '../../styles/commonPage.module.scss';
import { getWeeklyDownloads } from '../../services/package';
export const Home: React.FC = () => {
  const [downloads, setDownloads] = React.useState(0);

  React.useEffect(() => {
    const getDownloads = async () => {
      const download = await getWeeklyDownloads();
      setDownloads(download);
    }
    getDownloads();
  }, []);
  return (
    <PageTemplate>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>react-animate-container</h2>
          <p>Welcome to react-animate-container!!</p>

          <ul>
            <li>
              <NavLink to="/getting-started">Get started with react-animate-container</NavLink>
            </li>
            <li>
              See the <NavLink to="/test">Configuration</NavLink> to use all react-animate-container features.
            </li>
            <li>
              Want to see how it works? Check our <NavLink to="/test">Demos</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>What is react-animate-container?</h3>
          
          <p>react-animate-container ({'<AnimateContainer />'}), is a react component built-in Typescript typings and it was created to 
          to make it easier for Developers to add animations that usually have to create from scratch.</p>

          <p>It is very easy to use, you just have to import the component and choose the animation you want to use. But there are more tha just choose the animation, {'<AnimateContainer /> '} 
            also allows you to customize and parameterize how and when to show the animation, as well as what to do before and after, the duration time, set delay, among other options.</p>

          <h3>How it works?</h3>
          
          <ul>
            <li>
              <span>Choose the animation:</span><br />
              <span>There are right now 53 (working to add more) different animation, some of them in-animation and other out-animation, then it is as simple as selecting one and adding as 
                children the content (components) that you want to animate.
              </span>
            </li>
            <li>
              <span>Show the animation:</span><br />
              <span className="mb-5 inline-block">There are two ways to show the animation</span><br />
              <span className="mb-5 inline-block">1. Intersection observer (default): The animation will be shown once the 50% of the content is in the viewport. 
                (<span className="quote">Don&apos;t worry, these parameters can be changed and also the component can use another component as reference for the intersection observer</span>)</span><br />
              <span>2. Manual active: To activate the animation manually, 
                it is only necessary to indicate to the component that the activation will be manual through 
                the &quot;manualActive&quot; property and then with the &quot;active&quot; property indicate when to activate it.</span>
            </li>
          </ul>

          <p>See more: <NavLink to={'/configuration'}>configration⇢</NavLink></p>

          <h3>Integrations</h3>
          <p>This is a component <span className="quote">(as the name says) for <a href="https://reactjs.org/" target={'_blank'} rel="noreferrer">React.js</a></span>, but we know you can find the way to use it with different frameworks 😉.</p>
        </div>

        <div className={styles.section}>
          <h2>Author</h2>
          <p>
            <a rel="noreferrer" target={'_blank'} href="https://www.linkedin.com/in/jorgesdeveloper/">Jorge Sotomayor (joxxe274)</a>
          </p>
          <p>
            <a rel="noreferrer" target={'_blank'} href="https://github.com/joxxe274">Github</a>
          </p>
        </div>

        <div className={styles.section}>
          <h3>The future of react-animate-container</h3>
          <p>There are many new features planned to be added, 
            such as new animations, special animations for 
            texts, color animations and filters, but the 
            next step is to complete all the documentation 
            (yes, it is still missing), finish the tests, add 
            documentation for the community ( yes, I&apos;m talking about you) 
            can collaborate and make this component grow.</p>
          <p>So, <NavLink to={'/getting-started'}>let&apos;s start ⇢</NavLink></p>
          <h4>Weekly Downloads: {downloads}</h4>
        </div>
      </div>
    </PageTemplate>
  )
}