export default function Timeline() {
  return (
    <section className="text-gray-800 bg-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
              <h2 className="text-3xl font-semibold">Experience</h2>
              <span className="text-sm font-bold tracking-wider text-gray-600 uppercase">
                +2 years experience.
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Associate DevOps Engineer
                </h3>
                <time className="text-xs tracking-wide text-gray-600 uppercase">
                  Sep 2022 - present
                </time>
                <p className="mt-3">
                  Pellentesque feugiat ante at nisl efficitur, in mollis orci
                  scelerisque. Interdum et malesuada fames ac ante ipsum primis
                  in faucibus.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Cloud Computing Path Student
                </h3>
                <time className="text-xs tracking-wide text-gray-600 uppercase">
                  Feb 2022 - Jul 2022
                </time>
                <p className="mt-3">
                  Participated successfully in Bangkit 2022 and was awarded
                  Graduate Distinction. The final average score I achieved was
                  96.45.
                </p>
                <br />
                <p>
                  As part of the Company-Based Capstone Project team for
                  KitaBisa.com, we developed the On-Demand Ambulance
                  Application, which is used to call the nearest ambulance in
                  emergency situations. Our team was also selected as the best
                  team at the Bangkit Company Capstone Project in collaboration
                  with Kitabisa.
                </p>
                <br />
                <p>Complete various courses and assignments:</p>
                <ul>
                  <li>- Web Development</li>
                  <li>- Javascript</li>
                  <li>- Back-End with Google Cloud</li>
                  <li>- Google Cloud Computing Foundations</li>
                  <li>- Google Cloud Skills Boost Quests</li>
                  <li>- Architecting with Google Compute Engine</li>
                </ul>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-600">
                <h3 className="text-xl font-semibold tracking-wide">
                  Laboratory Informatics Engineering Assistant
                </h3>
                <time className="text-xs tracking-wide text-gray-600 uppercase">
                  Mar 2020 - Feb 2022
                </time>
                <p className="mt-3">At LabTI I am responsible for:</p>
                <ul>
                  <li>
                    - Teach practicum courses in accordance with laboratory
                    procedures to practitioners
                  </li>
                  <li>- Develop practical lessons</li>
                  <li>- Ensuring the success of the practicum</li>
                </ul>
                <br />
                <p>Subjects I have taught:</p>
                <ul>
                  <li>- Accounting and Computer Information Systems</li>
                  <li>- Computer Graphics 1</li>
                  <li>- Computer Graphics 2</li>
                  <li>- Web Programming</li>
                  <li>- Basic Computer and ProgrammingAt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
