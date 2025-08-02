import { Header } from "./CPN/Header";
import { Footer } from "./CPN/Footer";
import { Sidebar } from "./CPN/Sidebar"
import { Taskinput } from "./CPN/Taskinput";
import { Task } from "./CPN/Task";

function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      {/* <header className="text-white bg-primary p-2 w-100">
        <h4>Note App</h4>
      </header> */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Bareeya" type="student"></Sidebar>
        {/* Main content */}

        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            <p>Bareeya Sanii</p>
            {/* input ด้านบน*/}
            <Taskinput></Taskinput>
          </main>
          {/* Card รายการ */}
          <Task
            id={1}
            title="Read a book"
            description="Vite + React + Bootstrap + TS"
            isDone={false}
          ></Task>
          <Task
            id={2}
            title="Write code"
            description="Finish project for class"
            isDone={false}
          ></Task>
          <Task
            id={3}
            title="Deploy app"
            description="Push project to GitHub Pages"
            isDone={false}
          ></Task>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer
        year="2025"
        fullName="Bareeya Sanii"
        studentId="670610713"
      ></Footer>
    </div>
  );
}

export default App;