import styled from "styled-components";

const FormWrapper = styled.form`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
    justify-content: flex-start;
    align-self: flex-start;
    width: 100%;
	height: 100%;
    margin: 0;

	label {
		font-size: 1.25rem;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.text};
		margin: 1rem 0 1rem 0;
	}

	p {
		color: ${({ theme }) => theme.colors.text};
		font-size: 0.9rem;
		margin: 0.1rem 0 0 0;
	}
`;

const FormInput = styled.input`
    width: 30rem;
    height: 3rem;
    padding: 0 1.25rem;
    background: ${({ theme }) => theme.colors.input};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.main};
    box-sizing: border-box;
    outline: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
	font-family: "IBM Plex Mono", sans-serif;
    margin-bottom: 0.5rem;

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.outline};
    }

    &:hover {
        outline: 1px solid ${({ theme }) => theme.colors.outline};
		box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.outline};
    }

    @media only screen and (max-width: 768px) {
        position: relative;
        width: 100%;
        height: 3rem;
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`;

const FormTextArea = styled.textarea`
    width: 30rem;
    height: 10rem;
    padding: 1.25rem;
    background: ${({ theme }) => theme.colors.input};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.main};
    box-sizing: border-box;
    outline: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
	font-family: "IBM Plex Mono", sans-serif;
    margin-bottom: 0.5rem;
    resize: vertical;

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.outline};
    }

    &:hover {
        outline: 1px solid ${({ theme }) => theme.colors.outline};
    }

    @media only screen and (max-width: 768px) {
        position: relative;
        width: 100%;
        height: 10rem;
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`;

const FormValidation = styled.span`
    display: relative;
    position: absolute;
    bottom: -1.5rem;
    right: -2.5rem;
    color: ${({ theme }) => theme.colors.text};
`;

export { FormWrapper, FormInput, FormTextArea, FormValidation };