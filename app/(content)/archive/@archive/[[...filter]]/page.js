import NewsList from "@/components/news-list";
import {
	getAvailableNewsMonths,
	getAvailableNewsYears,
	getNewsForYear,
	getNewsForYearAndMonth,
} from "@/utils/news";
import Link from "next/link";

export default async function YearPage({ params }) {
	const filter = params.filter;

	const selectedYear = filter?.[0];
	const selectedMonth = filter?.[1];

	let news;

	let links = await getAvailableNewsYears();

	if (selectedYear && !selectedMonth) {
		news = await getNewsForYear(selectedYear);
		links = getAvailableNewsMonths(selectedYear);
	}

	if (selectedYear && selectedMonth) {
		news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
		links = [];
	}

	let newsContent = <p>No News found for selected year</p>;

	if (news && news.length > 0) {
		newsContent = <NewsList news={news} />;
	}

	const availableYears = await getAvailableNewsYears();

	if (
		(selectedYear && !availableYears.includes(selectedYear)) ||
		(selectedMonth &&
			!getAvailableNewsMonths(selectedYear).includes(selectedMonth))
	) {
		throw new Error("Invalid Filter");
	}
	return (
		<>
			<header id="archive-header">
				<nav>
					<ul>
						{links.map((year) => {
							const href = selectedYear
								? `/archive/${selectedYear}/${year}`
								: `/archive/${year}`;
							return (
								<li key={year}>
									<Link href={href}>{year}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			{newsContent}
		</>
	);
}
