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
            When I was 5 years old, my father bought a refurbished{' '}
            <FancyLink href='https://en.wikipedia.org/wiki/Macintosh_Plus'>Apple Macintosh Plus</FancyLink>. That
            computer didn't have a hard disk drive, so I learned very quickly how to load programs by swapping floppy
            disks, including many hours spent playing with MacPaint. We acquired several Macs during my childhood, my
            favorite being the <FancyLink href='https://en.wikipedia.org/wiki/IMac_G3'>original iMac</FancyLink> which I
            successfully convinced my dad that we "needed."
          </p>
          <p>
            My desire to play video games led to an endless fascination with computers. By the age of 8, I was
            comfortable installing and upgrading our Macs to the latest OS and I still vividly remember how excited I
            was when Mac OS 8 was released. Back in the late 80s and early 90s, system requirements to load software
            were pretty important, even minimum OS versions were a big deal to have sorted out right. I was able to
            learn a lot about hardware, software, and the Mac OS, but when I saw all my friends playing games on
            "Windows" I was determined to join them somehow. When I was 12, I purchased a used{' '}
            <FancyLink href='https://en.wikipedia.org/wiki/Cyrix_6x86'>Cyrix 100MHz</FancyLink> system from my uncle and
            learned how to install Windows 95. This system used Socket 7, which was neat because it supported a variety
            of CPU vendors. Because of that, I was able to later afford replacing that crappy Cyrix for a{' '}
            <FancyLink href='https://en.wikipedia.org/wiki/Pentium_(original)#P55C'>Pentium 233 (w/MMX!)</FancyLink> and
            finally play some real games! On a side note, I owe many thanks to Scott Mueller for his excellent book{' '}
            <FancyLink href='https://www.oreilly.com/library/view/upgrading-and-repairing/9780134057729/'>
              "Upgrading and Repairing PCs"
            </FancyLink>{' '}
            of which I spent many, many hours reading. Over the past twenty years I’ve built dozens of PCs for family,
            friends, myself, and professionally.
          </p>
          <h3 className='font-header text-synthpink-100 text-xs'>Education and Career</h3>
          <p>
            When I was in high school I was interested in math and enrolled in college for mechanical engineering. On a
            whim I took an accounting course as an elective. I enjoyed it so much that I decided to change my major. In
            2005 I completed an Associate’s degree in Accounting with aspirational ideas of becoming a CFO someday.
            While working on my Bachelor's full-time, I took on a crappy full-time job (with a long commute) to make
            ends meet. Unfortunately, that was too much for me to maintain, so I dropped out of the University of Kansas
            in 2007 with only 40 credit hours remaining to graduate.
          </p>
          <p>
            Although I wanted to eventually finish my degree, I bounced around for several years before catching a
            break: in January 2010, I got a temp job as a PC technician at The Ohio State University. I was deadset on
            making the best of that opportunity and my career in tech has grown ever since. Working at OSU, I gained
            experience with system administration, networking, security, and nearly everything you might see working in
            Tech Support (both hardware and software). Throughout my career I've exhibited a voracious appetite to learn
            and a desire to share my knowledge with others. But that unfinished degree was always gnawing in the back of
            my mind.
          </p>
          <p>
            In 2017, I made the decision to finish my degree, and I graduated summa cum laude at Cleveland State
            University in May 2020 with a BBA in Management (and a minor in Accounting). Computer Science is of obvious
            interest to me however and if I ever do decide to go back to school again, it will be to complete a degree
            in CS. Currently I have no definite plans to pursue that, but my wife has already made a bet that I will
            eventually!
          </p>
          <h3 className='font-header text-synthpink-100 text-xs'>Current Interests</h3>
          <p>
            These days I am most interested in software development and cloud computing technology. JavaScript is my
            main programming language, which is what this website is built with, and I also have experience using Java
            and C#. I am actively certified as an{' '}
            <FancyLink href='https://aws.amazon.com/certification/certified-solutions-architect-associate/'>
              AWS Solutions Architect
            </FancyLink>{' '}
            and{' '}
            <FancyLink href='https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster'>
              Scrum Master
            </FancyLink>
            . Previously I've held CompTIA A+, Network+, Security+, Juniper JNCIA-JUNOS, and Cisco CCNA certifications,
            all of which have expired.
          </p>
          <p>
            My current PC is already a few years old now, but it suits my needs: * i3-10100F * EVGA GeForce GTX 1060 3GB
            * 16GB RAM * Samsung 850 EVO 250GB SSD * Hitachi 1.5TB RAID1
          </p>
          <p>
            I still love to build new PCs and I'm always fighting the urge to upgrade. If GPU prices every stop being
            crazy I'd like to pick up a 3060 or 3070, but I might be waiting awhile on that. In the meantime, I'm
            working on a new home server for my homelab setup so that I can play around with Kubernetes and RedHat.
          </p>
          <h3 className='font-header text-synthpink-100 text-xs'>How This Website Was Built</h3>
          <p>
            My<FancyLink href='https://github.com/grossmeyer/glennmeyer.dev'>previous website</FancyLink> was built
            using<FancyLink href='https://gohugo.io/'>Hugo</FancyLink>, which is a fast and easy to use static-site
            generator (SSG) built using<FancyLink href='https://golang.org/'>Golang</FancyLink>. It worked well enough
            but I really wanted to make a fully-custom blog created with JavaScript and a modern CMS that wasn't
            WordPress. After lots of false starts and failed experiments, I built this new version using{' '}
            <FancyLink href='https://nextjs.org/'>NextJS</FancyLink> (and obviously{' '}
            <FancyLink href='https://reactjs.org/'>ReactJS</FancyLink>),{' '}
            <FancyLink href='https://sanity.io/'>SanityCMS</FancyLink>, and{' '}
            <FancyLink href='https://tailwindcss.com/'>TailwindCSS</FancyLink>.
          </p>
          <p>
            Additionally I'm using the syntax highlighting theme 'ColdDark-Dark' from{' '}
            <FancyLink href='https://prismjs.com/'>PrismJS</FancyLink> via the{' '}
            <FancyLink href='https://www.npmjs.com/package/react-syntax-highlighter'>
              react-syntax-highlighter library
            </FancyLink>
            . <FancyLink href='https://www.npmjs.com/package/moment'>Moment</FancyLink> is also used for date/time
            formatting.
          </p>
          <p>
            Primary work on this blog began in April 2021, but I made significant progress beginning in June and here in
            early August I've finally gotten it into a state that is "good enough." It's deployed on{' '}
            <FancyLink href='https://vercel.com/'>Vercel</FancyLink>. I've not really kept a log of how many hours I've
            spent on the site, but I wouldn't be surprised if it's well into 50-60 hours. Some of that was learning
            NextJS, a LOT of it was learning TailwindCSS and designing layouts that I liked, and the rest was learning
            SanityCMS (mostly fighting{' '}
            <FancyLink href='https://www.sanity.io/docs/presenting-block-text'>PortableText</FancyLink> and parsing{' '}
            <FancyLink href='https://www.sanity.io/docs/overview-groq'>GROQ</FancyLink>, both of which work pretty well
            once you get the hang of them).
          </p>
          <p>
            My plans for this blog are to write a tutorial courses related to JavaScript and programming. Up first will
            be an integrated learning series about React/Next, Tailwind, and SanityCMS, essentially learning those
            technologies by recreating this website from scratch. Besides that, I have more general programming
            tutorials planned that solve exercises from <FancyLink href='https://leetcode.com/'>LeetCode</FancyLink> and{' '}
            <FancyLink href='https://eloquentjavascript.net/'>Eloquent JavaScript</FancyLink>. If you have topics you'd
            like to read about, send me your ideas on Twitter!
          </p>
          <br />
        </main>
      </article>
      <Footer />
    </>
  )
}
