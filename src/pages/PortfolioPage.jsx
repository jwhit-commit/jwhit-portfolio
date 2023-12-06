
export default function PortfolioPage() {

    return (
        <div className="container pt-4">
            <h3 className="py-2">
                Portfolio
            </h3>
            <div className="container-fluid d-flex justify-content-center align-items-center my-5">
                    <a href=""><img src="src/assets/workouttracker.png" alt="workout tracker" className="folio mx-5"></img></a>
                    <a href="https://github.com/jwhit-commit/jwhit-note-taker"><img src="src/assets/notetaker.png" alt="note taker" className="folio mx-5"></img></a>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center my-5">
                    <a href="https://secure-plateau-16621-4c6aadcc7f2d.herokuapp.com/"><img src="src/assets/cms.png" alt="blog cms" className="folio mx-5"></img></a>
                    <a href="https://desolate-cove-89215-d9792a7c3caa.herokuapp.com/"><img src="src/assets/evlocator.png" alt="ev locator" className="folio mx-5"></img></a>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center my-5">
                    <a href="https://github.com/jwhit-commit/jwhit-readme-generator"><img src="src/assets/readmegenerator.png" alt="readme generator" className="folio mx-5"></img></a>
                    <a href="https://jwhit-commit.github.io/jwhit-cha4-web-quiz/"><img src="src/assets/timedquiz.png" alt="folio" className="folio mx-5"></img></a>
            </div>
        </div>
      );
}
