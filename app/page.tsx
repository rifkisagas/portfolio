/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HS41FnZNReU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          Portfolio
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Experience
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Certifications
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
      <section id="about" className="py-12 px-6 md:py-20 md:px-12 bg-muted">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/img1.jpg"
              width="400"
              height="400"
              alt="Profile Picture"
              className="rounded-full mx-auto"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              Hi, I&apos;m a cybersecurity enthusiast with a passion for ethical hacking and digital forensics. I have
              experience in Kali Linux, Python, and various security tools. I&apos;m always eager to learn and explore new
              technologies in the field of cybersecurity.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" className="py-12 px-6 md:py-20 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Python</h3>
              <p className="text-muted-foreground">
                Proficient in Python programming for security automation and scripting.
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Kali Linux</h3>
              <p className="text-muted-foreground">
                Experienced in using Kali Linux for penetration testing and ethical hacking.
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Ethical Hacking</h3>
              <p className="text-muted-foreground">Skilled in ethical hacking techniques and methodologies.</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Digital Forensics</h3>
              <p className="text-muted-foreground">Experienced in digital forensics and incident response.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="py-12 px-6 md:py-20 md:px-12 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Experience</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Analyst</h3>
              <p className="text-muted-foreground mb-2">ABC Company, 2021 - Present</p>
              <p className="text-muted-foreground">
                Responsible for monitoring and analyzing security events, implementing security controls, and responding
                to incidents. Contributed to the development of security policies and procedures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Intern, Ethical Hacking</h3>
              <p className="text-muted-foreground mb-2">XYZ Security, 2020</p>
              <p className="text-muted-foreground">
                Participated in penetration testing engagements, conducted vulnerability assessments, and assisted in
                the development of security solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-12 px-6 md:py-20 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Labtif Connect</h3>
              <p className="text-muted-foreground mb-4">
                A web application that connects cybersecurity enthusiasts with virtual labs and hands-on learning
                resources.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
                View Project
              </Link>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Hackers and Digital Society</h3>
              <p className="text-muted-foreground mb-4">
                A blog exploring the impact of hacking and cybersecurity on modern society.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-primary hover:underline" prefetch={false}>
                <LinkIcon className="w-4 h-4" />
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="certifications" className="py-12 px-6 md:py-20 md:px-12 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Essentials</h3>
              <p className="text-muted-foreground mb-4">Certified by Cisco Networking Academy</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">CyberOps Associate</h3>
              <p className="text-muted-foreground mb-4">Certified by Cisco Networking Academy</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Microsoft Security Operations Analyst</h3>
              <p className="text-muted-foreground mb-4">Certified by Microsoft</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Google IT Support Professional</h3>
              <p className="text-muted-foreground mb-4">Certified by Google</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-12 px-6 md:py-20 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-md mx-auto space-y-4">
            <Input type="text" placeholder="Name" className="w-full" />
            <Input type="email" placeholder="Email" className="w-full" />
            <Textarea placeholder="Message" className="w-full" />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <p>&copy; 2024 Portfolio</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms
          </Link>
        </div>
      </footer>
    </div>
  )
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}