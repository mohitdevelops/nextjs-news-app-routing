import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/utils/news-data";
import Link from "next/link";

export default function NewsPage() {
	return (
		<div id="news">
			<h1>News Page</h1>
			<NewsList news={DUMMY_NEWS} />
		</div>
	);
}
