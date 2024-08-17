import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text 'Hi, I'm Mark'", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm mark/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text 'This is an image of me.jpg'", () => {
  render(<App />);
  const image = screen.getByAltText(/this is an image of me\.jpg/i);
  expect(image).toBeInTheDocument();
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a biography paragraph", () => {
  render(<App />);
  const biographyParagraph = screen.getByText(/this is simply dummy text of the printing and typesetting industry\. lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book\. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged\. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum\.\./i);
  expect(biographyParagraph).toBeInTheDocument();
});

test("displays a link to GitHub with the correct href", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/mark-kibuthu');
});

test("displays a link to LinkedIn with the correct href", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/my-username');
});
