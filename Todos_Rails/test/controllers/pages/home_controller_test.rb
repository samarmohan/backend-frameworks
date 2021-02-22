require "test_helper"

class Pages::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pages_home_index_url
    assert_response :success
  end
end
