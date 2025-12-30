import NewsList from "@/components/news-list";
import { getLatestNews } from "@/utils/news";

export default function LatestPage() {
	const latestNews = getLatestNews();
	return (
		<>
			<h2>Latest Page</h2>
			<NewsList news={latestNews} />
		</>
	);
}
