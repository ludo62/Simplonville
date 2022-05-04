import React from "react";
import "./Topics.css";
import TopicItem from "./TopicItem/TopicItem";
import { SettingsIcon } from "../../icons/index";

function Topics() {
  return (
    <div className="widgetsTopics">
      <div className="widgetsTopicsHeader">
        <span>Tendances</span>
        <SettingsIcon />
      </div>
      <TopicItem
        category="Progamation · Tendances"
        title="React"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Progamation · Tendances"
        title="React Native"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Progamation · Tendances"
        title="Javascript"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Programming · Trending"
        title="CSS"
        numberoftweet="13.1K"
      />
      <TopicItem
        category="Programming · Trending"
        title="HTML"
        numberoftweet="13.1K"
      />

      <div className="widgetsTopicMore">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Topics;
