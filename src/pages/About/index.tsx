import { motion } from 'framer-motion';
import { pageSlideLeft } from '../../utils/animations';

import Header from '../../components/Header';
import Pyramid from '../../components/Pyramid';
import AnimatedText from '../../components/AnimatedText';

import portrait from '../../assets/images/portfoliobw.jpg';
import * as S from './styles';

const About = () => (
  <S.Container
    variants={pageSlideLeft}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <Header />

    <div className="portrait">
      <motion.img
        src={portrait}
        alt="Gabriel Herdina"
      />
    </div>

    <S.Content>
      <section>
        <AnimatedText
          text="_ WHO AM I?"
          marked="_"
          delay={0}
          justify="flex-start"
        />

        <div className="content-text">
          <p className="intro">Hi, everyone! :)</p>

          <p>
            My name is Gabriel, I’m 27 years old and I live in Curitiba, Brazil. I’ve been
            studying programming for a little over a year, motivated by the pursuit of a new
            career in technology. I’m a journalist graduated from the Federal University of
            Paraná and used to work with photojournalism and SEO marketing. Recently,
            I discovered that my true passion lies in coding.
          </p>
        </div>
      </section>

      <section>
        <AnimatedText
          text="_ TECH EXPERIENCE"
          marked="_"
          delay={0.5}
          justify="flex-start"
        />

        <div className="content-text">
          <p>
            Things started in 2022, when I decided to leave the communication field for good and
            enroll in Trybe’s one-year web development course. There I was able to learn the
            basics of HTML, CSS and JavaScript - followed by approximately 8 months of creating
            user interfaces (React) and REST APIs (Node).
          </p>

          <p>
            Although I have some experience in building simple back-end applications,
            my preference is front-end and UX/UI design. To be able to create high-quality
            products, I dedicate most of my time on a daily basis to refining my code and
            mastering essential and complementary tools, like TypeScript, Styled Components and
            Framer Motion. There’s a section here where you can see my best projects up to date.
          </p>
        </div>
      </section>

      <section>
        <AnimatedText
          text="_ INTERESTS"
          marked="_"
          delay={0.5}
          justify="flex-start"
        />

        <div className="content-text">
          <p>
            I’m very eager to learn about various subjects, even from other fields of knowledge,
            with the goal of improving my understanding of our reality. As a journalism student,
            I wrote the book "Os Caminhos do Cipó", which explores psychology, medicine and
            anthropology through the world of Ayahuasca. It won the highest award in Expocom Sul,
            the most prestigious communication college event in Brazil’s southern region. I also
            love football, online games, literature, history and astronomy.
          </p>

          <p>
            Currently, I’m available for future opportunities. If you are interested in my work,
            feel free to get in touch.
            {' '}
            <strong>See you soon!</strong>
          </p>
        </div>
      </section>
    </S.Content>

    <div className="pyramid-container">
      <Pyramid />
    </div>
  </S.Container>
);

export default About;
