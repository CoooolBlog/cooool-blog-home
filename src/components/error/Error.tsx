import React from "react";
import styled from "@emotion/styled";
import { Container, Link, Typography } from "@mui/material";

interface Props {
  className?: string;
  href: string;
  msg: string;
  status: number;
}

const Status = styled(Typography)`
  padding: 10px 23px 10px 0;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 20px;
  font-size: 24px;
  font-weight: 500;
`;

const Message = styled(Typography)`
  font-size: 14px;
`;

const WarpLink = styled(Link)`
  margin: 20px 0;
`;

const ErrorBase = ({ className, href, status, msg }: Props): JSX.Element => {
  return (
    <>
      <Container className={className} maxWidth="xl">
        <Status variant="h1">{status}</Status>
        <Message>{msg}</Message>
      </Container>
      <Container className={className} maxWidth="xl">
        <WarpLink href={href} underline="none" color="inherit">
          Back
        </WarpLink>
      </Container>
    </>
  );
};

export default styled(ErrorBase)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
