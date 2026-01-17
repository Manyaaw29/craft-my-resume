import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      <div className="grid grid-cols-3">
        {/* Image */}
        <div className="col-span-1 py-10">
          {data.personal_info?.image &&
          typeof data.personal_info.image === "string" ? (
            <div className="mb-4">
              <img
                src={data.personal_info.image}
                alt="Profile"
                className="w-28 h-28 object-cover rounded-full mx-auto"
                style={{ background: accentColor + "70" }}
              />
            </div>
          ) : data.personal_info?.image &&
            typeof data.personal_info.image === "object" ? (
            <div className="mb-4">
              <img
                src={URL.createObjectURL(data.personal_info.image)}
                alt="Profile"
                className="w-28 h-28 object-cover rounded-full mx-auto"
              />
            </div>
          ) : null}
        </div>

        {/* Name */}
        <div className="col-span-2 flex flex-col justify-center py-10 px-8">
          <h1 className="text-5xl font-bold text-zinc-700 tracking-wide mb-1">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="uppercase text-zinc-600 font-medium text-base tracking-widest">
            {data.personal_info?.profession || "Profession"}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="col-span-1 border-r border-zinc-400 p-6 pt-0 pb-12">
          {/* Contact */}
          <section className="mb-4">
            <h2 className="text-base font-semibold tracking-widest text-zinc-600 mb-3">
              CONTACT
            </h2>
            <div className="space-y-2" style={{ fontSize: "12.5px" }}>
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={15} style={{ color: accentColor }} />
                  <span>{data.personal_info.phone}</span>
                </div>
              )}
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={15} style={{ color: accentColor }} />
                  <span>{data.personal_info.email}</span>
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={15} style={{ color: accentColor }} />
                  <span>{data.personal_info.location}</span>
                </div>
              )}
              {data.personal_info?.github && (
                <a
                  href={data.personal_info.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition"
                >
                  <Github size={15} style={{ color: accentColor }} />
                  <span>
                    {data.personal_info.github
                      .split("github.com/")[1]
                      ?.split("/")[0] ||
                      data.personal_info.github.split("//")[1]?.split("/")[0] ||
                      "GitHub"}
                  </span>
                </a>
              )}
              {data.personal_info?.linkedin && (
                <a
                  href={data.personal_info.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition"
                >
                  <Linkedin size={15} style={{ color: accentColor }} />
                  <span>
                    {data.personal_info.linkedin
                      .split("linkedin.com/in/")[1]
                      ?.split("/")[0] ||
                      data.personal_info.linkedin
                        .split("linkedin.com/")[1]
                        ?.split("/")[0] ||
                      "LinkedIn"}
                  </span>
                </a>
              )}
              {data.personal_info?.website && (
                <a
                  href={data.personal_info.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition"
                >
                  <Globe size={15} style={{ color: accentColor }} />
                  <span>
                    {data.personal_info.website
                      .split("://")[1]
                      ?.split("/")[0] ||
                      data.personal_info.website.split("/")[0] ||
                      "Website"}
                  </span>
                </a>
              )}
            </div>
          </section>

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="mb-4">
              <h2 className="text-base font-semibold tracking-widest text-zinc-600 mb-3">
                EDUCATION
              </h2>
              <div className="space-y-4" style={{ fontSize: "12.5px" }}>
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold uppercase">
                      {edu.degree}
                      {edu.field && ` in ${edu.field}`}
                    </p>
                    <p className="text-zinc-600">{edu.institution}</p>

                    <p className="text-zinc-500">
                      {formatDate(edu.graduation_date)}
                      {edu.score && edu.score_type && (
                        <>
                          {" • "}
                          {edu.score_type === "cgpa"
                            ? `CGPA: ${edu.score}`
                            : `Percentage: ${edu.score}%`}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-4">
              <h2 className="text-base font-semibold tracking-widest text-zinc-600 mb-3">
                SKILLS
              </h2>
              <ul className="space-y-1.5" style={{ fontSize: "12.5px" }}>
                {data.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section className="mb-6">
              <h2 className="text-base font-semibold tracking-widest text-zinc-600 mb-3">
                LANGUAGES
              </h2>
              <ul className="space-y-1.5" style={{ fontSize: "12.5px" }}>
                {data.languages.map((lang, index) => (
                  <li key={index}>
                    {lang.name}{" "}
                    <span className="text-zinc-500">({lang.proficiency})</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* Main Content */}
        <main className="col-span-2 p-8 pt-0 pb-12">
          {/* Summary */}
          {data.professional_summary && (
            <section className="mb-9">
              <h2
                className="text-lg font-semibold tracking-widest mb-4"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>
              <p className="text-zinc-700 leading-relaxed text-base">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-9">
              <h2
                className="text-lg font-semibold tracking-widest mb-5"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h2>
              <div className="space-y-6 mb-9">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold text-zinc-900 text-lg">
                        {exp.position}
                      </h3>
                      <span className="text-sm text-zinc-500">
                        {formatDate(exp.start_date)} –{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p className="text-base mb-2" style={{ color: accentColor }}>
                      {exp.company}
                    </p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                        {exp.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project && data.project.length > 0 && (
            <section>
              <h2
                className="text-lg uppercase tracking-widest font-semibold mb-5"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-5">
                {data.project.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium text-zinc-800">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm hover:underline block mb-2"
                        style={{ color: accentColor }}
                      >
                        {project.link}
                      </a>
                    )}
                    {project.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1.5">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default MinimalImageTemplate;