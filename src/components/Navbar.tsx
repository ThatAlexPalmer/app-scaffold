import { Nav, Logotype } from "./wrappers";
import { LogoRouter, StyledA } from "./buttons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<Nav>
			<LogoRouter>
				<Link href="/">
					<Image src="/tap-glyph.svg" alt="Transfer Agent Protocol" width={48} height={48} />
				</Link>
				<Logotype>Logotype</Logotype>
			</LogoRouter>
			<span>
				<StyledA>
					<Link href="https://github.com/poet-network/app-scaffold" target="_blank ">
						<Image src="/icons/github.svg" alt="Poet's App Scaffold" width={32} height={32} />
					</Link>
				</StyledA>
			</span>
		</Nav>
	);
};