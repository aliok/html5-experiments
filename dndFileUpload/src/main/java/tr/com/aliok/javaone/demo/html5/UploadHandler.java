package tr.com.aliok.javaone.demo.html5;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;

@MultipartConfig(location = "/upload")
@WebServlet(urlPatterns = "/xhr_upload")
public class UploadHandler extends javax.servlet.http.HttpServlet {

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        try {
            //dont do the real file upload
            Collection<Part> parts = req.getParts();
            int i = 0;
            for (Part part : parts) {
                //MultiPartInputStream.MultiPart multiPart = (MultiPartInputStream.MultiPart)part;
                //String fileName = multiPart.getContentDispositionFilename() + "_" + System.currentTimeMillis();
                String fileName = part.getName();
                System.out.println(fileName);
                part.write(fileName);

                InputStream is = part.getInputStream();

                // get filename to use on the server
                String outputfile = this.getServletContext().getRealPath(fileName);  // get path on the server

                System.out.println(outputfile);

                FileOutputStream os = new FileOutputStream(outputfile);

                // write bytes taken from uploaded file to target file
                int ch = is.read();
                while (ch != -1) {
                    os.write(ch);
                    ch = is.read();
                }
                os.close();
                i++;
            }


            resp.getWriter().write(req.getParts().size() + " file(s) uploaded successfully...");
        }
        catch(Exception e){
            //swallow the exception
            e.printStackTrace();
        }
    }

}
