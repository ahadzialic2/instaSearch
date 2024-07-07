require "test_helper"

class SearchLogsControllerTest < ActionDispatch::IntegrationTest
  test "should get analytics" do
    get search_logs_analytics_url
    assert_response :success
  end
end
