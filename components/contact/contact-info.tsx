import { Github, Linkedin, Mail, MapPin } from "lucide-react"

export function ContactInfo() {
  return (
    <>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="bg-white/10 p-3 rounded-full mr-4">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Email</h3>
            <a href="mailto:devratdave02@hotmail.com" className="text-white/70 hover:text-white transition-colors">
              devratdave02@hotmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-white/10 p-3 rounded-full mr-4">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-white/70">New Delhi, India</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Connect with me</h3>
        <div className="flex space-x-4">
          <a
            href="https://github.com/devratdave"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/devratdave"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:devratdave02@hotmail.com"
            className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </>
  )
}

