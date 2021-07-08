const base_url = "https://hacker-news.firebaseio.com/v0/";

// https://hacker-news.firebaseio.com/v0/topstories.json

const getTops = async () => {
  const response = await fetch(`${base_url}/topstories.json`);
  const data = await response.json();
  return data;
};

const getBest = async () => {
  const response = await fetch(`${base_url}/beststories.json`);
  const data = await response.json();
  return data;
};

const getNewest = async () => {
  const response = await fetch(`${base_url}/newstories.json`);
  const data = await response.json();
  return data;
};

const getAsks = async () => {
  const response = await fetch(`${base_url}/askstories.json`);
  const data = await response.json();
  return data;
};

const getJobs = async () => {
  const response = await fetch(`${base_url}/jobstories.json`);
  const data = await response.json();
  return data;
};

const getShows = async () => {
  const response = await fetch(`${base_url}/showstories.json`);
  const data = await response.json();
  return data;
};

const getItem = async (id) => {
  const response = await fetch(`${base_url}/item/${id}/.json`);
  const data = await response.json();
  return data;
};

export { getTops, getBest, getNewest, getAsks, getJobs, getShows, getItem };
