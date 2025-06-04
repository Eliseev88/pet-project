import React, { ReactNode, Suspense } from 'react';
import { ErrorInfo } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;

}

// для классовых компонентов первым типом указываются пропсы (потом стейт)
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log(
			error,
			// Example "componentStack":
			//   in ComponentThatThrows (created by App)
			//   in ErrorBoundary (created by App)
			//   in div (created by App)
			//   in App
			info.componentStack
		);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			// тк внутри PageError используются переводы то оборачиваем в Suspense
			return <Suspense fallback=''><PageError /></Suspense>;
		}

		return children;
	}
}

// тк классовые компоненты не поддерживают хуки, то для перевода нужен HOС из i18next
// export default withTranslation()(ErrorBoundary);
