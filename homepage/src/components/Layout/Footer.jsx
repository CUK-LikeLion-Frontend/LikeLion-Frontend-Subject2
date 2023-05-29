import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <Container>
      <footer className="py-4 my-5 border-top">
        <p className="text-muted text-center font-weight-bold">
          ©{" "}
          <a
            class="text-decoration-none text-black"
            target="_blank"
            rel="noreferrer"
            href="https://likelioncuk.notion.site/likelioncuk/ade52330317b445998c7b066071bbff4"
          >
            2023 가톨릭대학교 멋쟁이 사자처럼
          </a>
        </p>
      </footer>
    </Container>
  );
}

export default Footer;
