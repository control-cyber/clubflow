package com.example.club.service;

import com.alibaba.fastjson.JSONObject;
import com.example.club.DAO.ClubPostDAO;
import com.example.club.DAO.ClubDAO;
import com.example.club.DAO.AccountDAO;
import com.example.club.service.Impl.ClubService;
import com.example.club.entity.Club;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

public interface IClubService {

    public JSONObject createClub(JSONObject inform, int UserId);

    public JSONObject modifyClub(JSONObject inform,int ClubId,int UserId);

    public JSONObject viewClub(int ClubId,int UserId);

    public JSONObject viewClubbyAccount(int UserId);

    public JSONObject viewAnnouncement(int UserId);

    public JSONObject viewAttensionList(int UserId);
}
