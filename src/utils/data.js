export const companiesData = [
  {
    id: 1,
    title: "company 1",
    userActivateData: [8, 12, 10, 15, 14],
    sentimentTrends: [5, 8, 12, 10, 15],
    followerTimeline: [2, 18, 22, 25, 23],
    timelineSummery: [15, 20, 18, 22, 25],
    topHasTag: [12, 15, 14, 18, 16],
    topComment: [10, 13, 17, 15, 14],
    viralPost: [25, 23, 27, 30, 28],
  },
  {
    id: 2,
    title: "company 2",
    userActivateData: [18, 22, 20, 25, 23],
    sentimentTrends: [10, 13, 17, 15, 14],
    followerTimeline: [30, 28, 32, 35, 33],
    timelineSummery: [25, 23, 27, 30, 28],
    topHasTag: [14, 18, 16, 20, 22],
    topComment: [17, 15, 14, 18, 16],
    viralPost: [20, 25, 23, 27, 30],
  },
  // Add data for three more companies
  {
    id: 3,
    title: "company 3",
    userActivateData: [30, 25, 23, 27, 30],
    sentimentTrends: [5, 10, 8, 12, 15],
    followerTimeline: [25, 30, 28, 32, 35],
    timelineSummery: [15, 20, 18, 22, 25],
    topHasTag: [12, 18, 16, 20, 22],
    topComment: [8, 12, 10, 14, 17],
    viralPost: [25, 50, 43, 17, 34],
  },
  {
    id: 4,
    title: "company 4",
    userActivateData: [40, 35, 33, 37, 40],
    sentimentTrends: [3, 8, 6, 10, 12],
    followerTimeline: [35, 40, 38, 42, 45],
    timelineSummery: [25, 30, 28, 32, 35],
    topHasTag: [22, 28, 26, 30, 32],
    topComment: [18, 22, 20, 24, 27],
    viralPost: [30, 35, 33, 37, 40],
  },
  {
    id: 5,
    title: "company 5",
    userActivateData: [20, 25, 23, 27, 30],
    sentimentTrends: [12, 18, 16, 20, 22],
    followerTimeline: [5, 10, 8, 12, 15],
    timelineSummery: [30, 35, 33, 37, 40],
    topHasTag: [28, 32, 30, 34, 37],
    topComment: [22, 27, 25, 29, 32],
    viralPost: [10, 15, 13, 17, 20],
  },
];

export const chartListData = [
  {
    title: "User Activate Data",
    chartId: "userActivateData",
    type: "lines",
  },
  {
    title: "Sentiment Trends",
    chartId: "sentimentTrends",
    type: "bar",
  },
  {
    title: "Follower Timeline",
    chartId: "followerTimeline",
    type: "lines",
  },
  {
    title: "Timeline Summery",
    chartId: "timelineSummery",
    type: "bar",
  },
  {
    title: "Top HashTag",
    chartId: "topHasTag",
    type: "lines",
  },
  {
    title: "Top Comments",
    chartId: "topComment",
    type: "lines",
  },
  {
    title: "Viral Post Timeline",
    chartId: "viralPost",
    type: "bar",
  },
];
