import { Body, Container, Text, Link, Preview } from "@react-email/components";
const WelcomeTemplate = () => {
  return (
    <html>
      <Preview>Welcome </Preview>
      <Body>
        <Container>
          <Text>Hello World</Text>
          <Link href="https://sondus.co"></Link>
        </Container>
      </Body>
    </html>
  );
};

export default WelcomeTemplate;
