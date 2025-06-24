import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccessibleButton from '../components/Accessiblebutton';

test('AccessibleButton calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<AccessibleButton onClick={handleClick}>Click me</AccessibleButton>);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});

test('AccessibleButton is disabled when disabled prop is passed', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<AccessibleButton onClick={handleClick} disabled>Click me</AccessibleButton>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
});

test('AccessibleButton has correct aria-label when aria-label prop is passed', () => {
    const { getByRole } = render(<AccessibleButton aria-label="custom label">Click me</AccessibleButton>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveAttribute('aria-label', 'custom label');
});

test('AccessibleButton has correct role when role prop is passed', () => {
    const { getByRole } = render(<AccessibleButton role="menuitem">Click me</AccessibleButton>);
    const buttonElement = getByRole('menuitem');
    expect(buttonElement).toBeInTheDocument();
});
