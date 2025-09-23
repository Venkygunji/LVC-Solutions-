import Carousel from 'react-bootstrap/Carousel';
import '../style.css'
// import LVCAcaLogo from '../assets/lvcAcaTransparent.png';

function AcademyCarousel() {
  return (
     <Carousel className="academy-carousel gradient-background-color bg-black">
     
      <Carousel.Item>
        <div className="slide-surface d-flex align-items-center justify-content-center">
          <Carousel.Caption style={{ bottom: '18%' }}>
            <div className="p-5 text-center no-card">
              <h1
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '40px',
                  fontWeight: 400,
                }}
              >
                Master the skills that matter in today&apos;s world —{' '}
                <strong>AI, Machine Learning, Data Science, and Full Stack Development.</strong>{' '}
                Our bootcamps combine <strong>70% hands-on</strong> with <strong>30% theory</strong>, designed to make you{' '}
                <strong>career-ready within 6 to 12 months.</strong>
              </h1>
              <div style={{ textAlign: 'center', marginTop: 20 }}>
                <em style={{ color: 'white', fontWeight: 400 }}>
                  Learn. Shadow. Practice. Get Hired
                </em>
              </div>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-surface">
          <Carousel.Caption>
            <div
              className="highlight-cards-container"
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div
                className="difference-card no-card"
                style={{ flex: '1 1 300px', maxWidth: '400px' }}
              >
                <div className="card-content p-4 rounded">
                  <h3>Fast-Track 6-Month Bootcamps</h3>
                  <ul>
                    <li>
                      For students & professionals who want to{' '}
                      <strong>upskill quickly</strong>
                    </li>
                    <li>Covers all core modules + real projects + shadowing</li>
                    <li>
                      Get <strong>job-ready in half a year</strong>
                    </li>
                  </ul>
                  <a href="http://www.lvcacademy.com">
                    <span className="learn-more">Learn More</span>
                  </a>
                </div>
              </div>

              <div
                className="difference-card no-card"
                style={{ flex: '1 1 300px', maxWidth: '400px' }}
              >
                <div className="card-content p-4 rounded">
                  <h3>Comprehensive 12-Month Bootcamps</h3>
                  <ul>
                    <li>Deeper curriculum with advanced specializations</li>
                    <li>
                      Extended <strong>shadowing + capstone projects</strong>
                    </li>
                    <li>
                      Ideal for those seeking{' '}
                      <strong>global career opportunities</strong>
                    </li>
                  </ul>
                  <a href="http://www.lvcacademy.com">
                    <span className="learn-more">Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-surface">
          <Carousel.Caption>
            <div className="difference-card no-card">
              <h3
                style={{
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 20,
                  fontSize: 40,
                }}
              >
                Why Choose LVC Academy?
              </h3>
              <div className="card-content" style={{ fontSize: 30 }}>
                <ul>
                  <li>
                    <strong>Shadowing Opportunities →</strong> Learn directly by
                    observing professionals
                  </li>
                  <li>
                    <strong>Hands-On First →</strong> 70% real projects, not just
                    lectures
                  </li>
                  <li>
                    <strong>Career-Ready Pathways →</strong> Resume prep, mock
                    interviews, recruiter connects
                  </li>
                  <li>
                    <strong>Flexible Durations →</strong> 6-month fast-track OR
                    12-month comprehensive
                  </li>
                  <li>
                    <strong>Global Recognition →</strong> Certificates trusted by
                    employers
                  </li>
                </ul>
              </div>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide-surface">
          <Carousel.Caption style={{ bottom: '13%' }}>
            <div className="table-responsive my-5">
              <h2 className="mb-4 text-center" style={{ color: 'white' }}>
                Feature Comparison
              </h2>
              <table className="table table-bordered text-center align-middle table-blackwhite">
                <thead className="table-dark">
                  <tr>
                    <th>Feature</th>
                    <th>LVC Academy</th>
                    <th>Udemy</th>
                    <th>Coursera</th>
                    <th>Scaler</th>
                    <th>UpGrad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duration Options</td>
                    <td>✅ 6 &amp; 12 months</td>
                    <td>❌ Undefined</td>
                    <td>❌ Long timelines</td>
                    <td>⚠️ Variable</td>
                    <td>⚠️ 6–12 months only</td>
                  </tr>
                  <tr>
                    <td>Shadowing</td>
                    <td>✅ Yes</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                    <td>❌ No</td>
                  </tr>
                  <tr>
                    <td>Hands-On %</td>
                    <td>✅ 70% practical</td>
                    <td>❌ &lt;20%</td>
                    <td>❌ &lt;25%</td>
                    <td>⚠️ Coding only</td>
                    <td>⚠️ Mixed</td>
                  </tr>
                  <tr>
                    <td>Career Support</td>
                    <td>✅ Resume, mock interviews, placements</td>
                    <td>❌ None</td>
                    <td>❌ Limited</td>
                    <td>⚠️ Basic</td>
                    <td>⚠️ General</td>
                  </tr>
                  <tr>
                    <td>Outcome Focus</td>
                    <td>✅ Job-ready in 6 or 12 months</td>
                    <td>❌ Self-paced only</td>
                    <td>❌ Academic</td>
                    <td>⚠️ Narrow</td>
                    <td>⚠️ Mixed ROI</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default AcademyCarousel;
