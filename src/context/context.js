import { createContext, useState } from "react";

import mockFollowers from "./mockData/mockFollowers";
import mockRepos from "./mockData/mockRepos";
import mockUser from "./mockData/mockUsers";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  return (
    <GithubContext.Provider value={{ githubUser, repos, followers }}>
      {children}
    </GithubContext.Provider>
  );
};
