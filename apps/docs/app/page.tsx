import Admin from "@repo/ui/admin";
import { Goals } from "@repo/ui/goals";
import { NAME, URL } from "@repo/misc/constants";

export default function Page(): JSX.Element {
	return (
		<main>
			<Goals>Be disciplined and complte the goals</Goals>

			<p>{URL}</p>
			<p>{NAME}</p>

			<Admin />
		</main>
	);
}
