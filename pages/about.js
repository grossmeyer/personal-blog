import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FancyLink from '../components/FancyLink'

export default function About() {
  return (
    <>
      <Navbar title='About' />
      <article className='container mx-auto max-w-4xl px-4 mx-8'>
        <Header titleText='Glenn Meyer Bio' subtitleText='Working With Tech for over 30 years' />
        <main className='prose-lg md:prose-xl font-typeface text-synthgrape-50'>
          <h2 className='font-header text-synthpink-100 text-sm'>Early Life</h2>
          <p>
            When I was 5 years old, my father bought a refurbished Apple Macintosh Plus. That computer didn't have a
            hard disk drive, so I learned very quickly how to load programs by swapping floppy disks. Many hours were
            spent playing around with MacPaint. My family purchased other Apple computers during my childhood, including
            one of the original iMacs. By the age of 8, I was comfortable installing and upgrading our Macs to the
            latest operating system and I still vividly remember how excited I was when Mac OS 8 was released. It's
            crazy how much operating systems have changed over the years.
          </p>
          <p>
            My endless fascination with computers, hardware, and operating systems was prompted especially by video
            games. Many times for me to install a game I needed a minimum OS version or additional RAM. Back in the
            early 90s the AAA titles that were Mac-compatible mostly came out of Blizzard, but I saw all my friends
            playing games on "Windows" and I was determined to join them somehow. When I turned 12, I purchased a used
            Cyrix 100MHz system from my uncle and learned how to install Windows 95. Soon after, I upgraded the
            hardware, swapping that crappy Cyrix for a Pentium 233 w/MMX! and finally played some real games! Later I
            bought a Dell XPS desktop for my 14th birthday, but after realizing I could’ve built my own PC with better
            specs for considerably less money, I decided to learn how to build my next PC on my own. Over the past
            twenty years I’ve built dozens of PCs for family, friends, myself, and professionally.
          </p>
          <p>
            My current PC is already a few years old now, but it suits my needs: * i3-10100F * EVGA GeForce GTX 1060 3GB
            * 16GB RAM * Samsung 850 EVO 250GB SSD * Hitachi 1.5TB RAID1
          </p>
          <p>
            If GPU prices every stop being crazy I'd like to upgrade to a 3060 or 3070. In the meantime, I'm working on
            a new home server for my homelab setup so that I can play around with OpenShift.
          </p>
          <h3 className='font-header text-synthpink-100 text-xs'>Education and Career</h3>
          <p>
            When I was in high school I was interested in math and enrolled in college for mechanical engineering. On a
            whim I took an accounting course as an elective. I enjoyed it so much that I decided to change my major. In
            2005 I completed an Associate’s degree in Accounting with aspirational ideas of becoming a CFO someday.
            While working on my Bachelor's full-time, I took on a crappy full-time job (with a long commute) to make
            ends meet. Unfortunately, that was too much for me to maintain, so I dropped out from the University of
            Kansas in 2007 with only 40 credit hours left to graduate.
          </p>
          <p>
            Although I wanted to eventually finish my degree, I bounced around for several years before catching a
            break: in January 2010, I got a temp job as a PC technician at The Ohio State University. I made the best of
            that opportunity and my career in tech has grown ever since. Working at OSU, I gained experience with system
            administration, networking, security, and nearly everything you might see working in Tech Support (both
            hardware and software). Throughout I've maintained a voracious appetite to learn and desire to share my
            knowledge with others. But that unfinished degree was always gnawing in the back of my mind.
          </p>
          <p>
            In 2017, I made the decision to finish my degree, and I graduated summa cum laude at Cleveland State
            University in May 2020 with a BBA in Management (and a minor in Accounting). Computer Science is of obvious
            interest to me and if I ever do decide to go back to school again, it will be to complete a degree in CS.
          </p>
          <h3 className='font-header text-synthpink-100 text-xs'>Current Interests</h3>
          <p>
            These days I am most interested in software development and cloud computing technology. JavaScript is my
            main programming language, which is what this website is built with, and I also have experience using Java
            and C#. I am actively certified as an AWS Solutions Architect and Scrum Master. My next certification will
            most likely be the Certified Kubernetes Administrator. Previously I've held A+, Network+, Security+,
            JNCIA-JUNOS, and CCNA certifications, all of which have expired.
          </p>
          <h3 className='font-header text-synthpink-100 text-xs'>How This Website Was Built</h3>
          <p>
            My <FancyLink href='https://github.com/grossmeyer/glennmeyer.dev'>previous website</FancyLink> was built
            using Hugo, which is a fast and easy to use static-site generator (SSG) built using Golang. It worked well
            enough but I really wanted to make a fully-custom blog created with JavaScript and a modern CMS that wasn't
            WordPress. After lots of false starts and failed experiments, I built this new version using NextJS (and
            obviously ReactJS), SanityCMS, and TailwindCSS.
          </p>
          <p>
            Additionally I'm using the syntax highlighting theme 'ColdDark-Dark' from PrismJS via the
            react-syntax-highlighter library. Moment is also used for date/time formatting.
          </p>
          <p>
            Primary work on this blog began in April 2021, but I made significant progress beginning in June and here in
            early August I've finally gotten it into a state that is think is "good enough." I've not really kept a log
            of how many hours I've spent on the site, but I wouldn't be surprised if it's well into 50-60 hours. Some of
            that was learning NextJS, a LOT of it was learning TailwindCSS and designing layouts that I liked, and the
            rest was learning SanityCMS (mostly fighting PortableText and parsing GROQ, both of which work pretty well
            once you get the hang of them).
          </p>
          <p>
            My plans for this blog are to write a tutorial course recreating this website from scratch, essentially an
            integrated approach to learning JavaScript by teaching React/Next, Tailwind, and Sanity. I haven't outlined
            that just yet, but I expect it to be reasonably long. Besides that, I have more general tutorials planned
            that work through exercises from LeetCode and Eloquent JavaScript. I love staying on the bleeding edge of
            what's new, so I also have thoughts on writing about Svelte, Astro, Alpine, Solid, and Redwood. Additionally
            I'd like to add the ability to comment on blog posts, which I think would be a nice feature. I'll rely on
            Twitter for now I guess!
          </p>
          <br />
        </main>
      </article>
      <Footer />
    </>
  )
}
