package com.example.club.service.Impl;

import com.alibaba.fastjson.JSONObject;
import com.example.club.dao.ClubPostDAO;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.jws.soap.SOAPBinding;

@Service
public class PostService {
/*
    @Resource
    private ClubPostDAO clubpostdao;

    @Override
    public JSONObject createPost(JSONObject inform, int UserId){
        return clubpostdao.createPost(inform, UserId);
    }

    @Override
    public JSONObject modifyPost(JSONObject inform,int PostId,int UserId){
        return clubpostdao.modifyPost(inform, UserId);
    }

    @Override
    public JSONObject viewPost(@PathVariable int PostId, int UserId){
        return clubpostdao.viewPost(PostId, UserId);
    }

    @Override
    public JSONObject viewPostbyUser(int UserId){
        return clubpostdao.viewPostbyUser(UserId);

    }

    @Override
    public JSONObject viewPostbyCLub(int ClubId,int UserId){
        return clubpostdao.viewPostbyClub(ClubId, UserId);
    }*/

}
