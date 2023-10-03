import './globals.css'
import type { Metadata } from 'next'

import SideNav from "./components/SideNav/SideNav";
import SearchBar from "./components/SearchBar/SearchBar";

export const metadata: Metadata = {
	title: 'Mattflix',
	description: 'Mattflix - An Entertainment Web App Clone',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="bg-base-100 min-h-screen">
				<main className="max-w-6xl mx-auto ">
				<div className="h-full flex gap-5 mt-6">
					<div className="flex">
						<SideNav />
					</div>
					<div className="flex flex-col">
						<div className="h-fit py-4">
							<SearchBar />
						</div>
						<div>
							{children}
						</div>
					</div>
				</div>
					
				</main>
			</body>
		</html>
	)
}
