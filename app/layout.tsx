import './globals.css'
import type { Metadata } from 'next'
import SideNav from "./components/SideNav/SideNav";
import { SearchClientLayout } from './components/SearchClientLayout/SearchClientLayout';



export const metadata: Metadata = {
	title: 'Mattflix',
	description: 'Mattflix - An Entertainment Web App Clone',
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-base-100 min-h-screen font-outfit">
				<main className="max-w-6xl mx-auto min-w-screen">
					<div className="h-full flex flex-wrap lg:mt-6 mt-4">
						<div className="flex lg:w-1/12 w-full lg:h-full lg:mx-0 mx-3">
							<SideNav />
						</div>
						<div className="flex flex-col lg:w-11/12 w-full lg:mx-0 mx-3">
							<SearchClientLayout>{children}</SearchClientLayout>
						</div>
					</div>

				</main>
			</body>
		</html>
	)
}
