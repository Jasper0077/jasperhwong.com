import React from "react";
import styled from "styled-components";

export interface BreadcrumbProps {
  children: React.ReactNode;
}
export interface CrumbProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const BreadcrumbWrapper = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: "/";
      opacity: 0.25;
      margin-right: var(--spacing);
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;

const Crumb = ({ href, isActive, children }: CrumbProps) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} aria-current={isActive ? "page" : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

export const Breadcrumbs = ({ children }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbWrapper>{children}</BreadcrumbWrapper>
    </nav>
  );
};

Breadcrumbs.Crumb = Crumb;
