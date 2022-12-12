package com.example.club.service;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

public interface IPostService {

    public JSONObject createPost(JSONObject inform, int UserId);

    public JSONObject modifyPost(JSONObject inform,int PostId,int UserId);

    public JSONObject viewPost(@PathVariable int PostId, int UserId);

    public JSONObject viewPostbyUser(int UserId);

    public JSONObject viewPostbyCLub(int ClubId,int UserId);
}
