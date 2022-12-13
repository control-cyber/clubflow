package com.example.club.service.Impl;

import com.alibaba.fastjson.JSONObject;
import com.example.club.dao.ClubDAO;
import com.example.club.dao.UserDao;
import com.example.club.service.IClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class ClubService implements IClubService {

    @Autowired
    private ClubDAO clbdao;
    @Autowired
    private UserDao userDao;
//    Random r=new Random();

    @Override
    public JSONObject createClub(JSONObject inform, int UserId){
        //create a blank JSON
        JSONObject newclub = new JSONObject();
        //complete the JSON
        newclub.put("name", inform.getString("name"));
        Date date = new Date();
        newclub.put("date",date.toString());
        String user = userDao.username(UserId);
        newclub.put("creator", user);
        newclub.put("image", inform.getString("profile"));
        newclub.put("info", inform.getString("inform"));
        //create a new club by using newclub(JSON), return state
        int statenow = clbdao.createclub(newclub);
        //state = 1, success; state = 0, 社团重名; state = 2, 超时
        JSONObject res = new JSONObject();
        res.put("state", statenow);
        res.put("clubId", newclub.getInteger("id"));
        res.put("clubName", newclub.getString("clubName"));
        return res;
    }

    @Override
    public JSONObject modifyClub(JSONObject inform,int ClubId,int UserId){
        //modify club(ClubId), return state
        int state= clbdao.modifyclub(inform, ClubId, UserId);
        //state = 1, success; state = 0, failure
        JSONObject modifiedclub = new JSONObject();
        modifiedclub.put("state",state);
        return modifiedclub;
    }

    @Override
    public JSONObject viewClub(int ClubId,int UserId){
        //use the ClubDAO method view()
        JSONObject club = clbdao.view(ClubId);
        //create a new JSON
        JSONObject res = new JSONObject();
        //fill up JSON res
        res.put("name", club.getString("clubName"));
        //Club doesn't have "category", default 艺术类
        res.put("category","艺术类");
        //Club doesn't have "fans number", default 100
        res.put("fans number",100);
        //Club doesn't have "pubications number", default 100
        res.put("publications number",100);
        //Club doesn't have "comment number", default 50
        res.put("comments number",50);
        //Club doesn't have "subscribe", default 156
        res.put("subscribe",156);

        res.put("inform", club.getString("clubInfo"));
        res.put("profile", club.getString("image"));
        res.put("created time", club.getString("createDate"));
        res.put("creator", club.getString("creator"));
        res.put("res", club);

        return res;
    }

    @Override
    public JSONObject viewClubbyAccount(int UserId){
        List<Object> list = clbdao.listmyclubs(UserId);
        JSONObject res = new JSONObject();
        for (int i=0; i<list.size(); i++){
            JSONObject temp = clbdao.view((Integer) list.get(i));
            res.put("club"+Integer.toString(i), temp);
        }
        return res;

    }
    @Override
    public JSONObject viewAnnouncement(int UserId){
        /*return clbdao.viewannouncement(UserId);*/
/*        因为数据库目前没有announcement存储，同时前端没有发布的位置，所以暂时静态*/
        JSONObject AnnouncementList=new JSONObject();
        for (int i=1;i<3;i++)
        {   JSONObject Announcement=new JSONObject();
            Announcement.put("context","塔可夫斯基《乡愁》放映");
            AnnouncementList.put("announcement"+Integer.toString(i),Announcement);
        }
        return AnnouncementList;
    }


    @Override
    public JSONObject viewAttensionList(int UserId){
/*        目前前端没有做界面，所以可以先不实现*/
/*        return clbdao.viewattensionlist(UserId);*/
        JSONObject res=new JSONObject();
        return res;
    }
}